import Text from '../Typography/TypographyText';


interface Commit {
  commit: {
    committer: {
      date: string;
    };
  };
}

async function fetchLatestCommit() {
  const res = await fetch('https://api.github.com/repos/iamseeley/tseeley/commits?sha=main', { next: { revalidate: 0 } });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const commits: Commit[] = await res.json();
  return commits[0].commit.committer.date;
}

function formatDate(dateString: string): string {
  const commitDate = new Date(dateString);
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);

  // Formatting for 'Today' or 'Yesterday'
  if (commitDate.toDateString() === now.toDateString()) {
    return `Updated today at ${commitDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'EST' })}`;
  } else if (commitDate.toDateString() === yesterday.toDateString()) {
    return `Updated yesterday at ${commitDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'EST' })}`;
  }

  // General date formatting
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'EST' };
  return `Updated ${commitDate.toLocaleDateString('en-US', options)}`;
}

export async function LastUpdated() {
  try {
    const latestCommitDate = await fetchLatestCommit();
    const formattedDate = formatDate(latestCommitDate);

    return (
      <Text weight={'bold'} color={'tertiary'} size={4}>
       {formattedDate}
      </Text>
    );
  } catch (error) {
    console.error(error);
    return (
      <Text weight={'bold'} color={'tertiary'} size={4}>
        Error fetching update date
      </Text>
    );
  }
}

export default LastUpdated;
