import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

//  the mediator between sanity and next.js, meaning between the backend and the frontend
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true // Set to false if statically generating pages, using ISR or tag-based revalidation
});
//  CRUD EXPLAINED :
//  CREATE : client.create
//  READ : client.fetch
//  UPDATE : client.patch
//  DELETE: client.delete
