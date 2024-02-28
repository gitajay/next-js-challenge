import { getRequest } from "@/service/queryWrapper.js";
import CustomDetails from '@/components/CustomDetails';
import styles from "@/app/jobs/[id]/page.module.css";

async function fetchJob(id) {
  try {
    const job = await getRequest(`jobs/${id}`);
    return job;
  } catch(error) {
      //Log errors
  }
}

export default async function JobDetails({ params }) {
  const { id } = params;
  const { data } = await fetchJob(id) || {};
  
  
  return (
    <div className={styles.main}>
      <h2>Job details of #{data?.title}</h2>
      <div className={styles.flexContainer}>
        <CustomDetails job={data} />
      </div>
    </div>
  )
}