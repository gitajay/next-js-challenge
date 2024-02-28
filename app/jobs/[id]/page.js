import { getRequest } from "@/service/queryWrapper.js";

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
  const { data } = await fetchJob(id);
  return (
    <div>hello</div>
  )
}