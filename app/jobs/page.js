import CustomCard from "@/components/CustomCard";
import { getRequest } from "@/service/queryWrapper.js";
import styles from "@/app/jobs/page.module.css";

async function fetchUser() {
  try {
    const jobs = await getRequest('jobs');
    return jobs;
  } catch(error) {
      //Log errors
  }
}

export default async function Jobs() {
  const { data } = await fetchUser() || {};
  return (
    <div className={styles.main}>
      <h2>Job listing</h2>
      {!data && <p className={styles.empty}>No Jobs posted!</p>}
      <div className={styles.flexContainer} >
        {data?.map(job => (
          <CustomCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}