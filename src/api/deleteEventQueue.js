/* @flow strict-local */
import type { Auth, ApiResponseSuccess } from './apiTypes';
import { apiDelete } from './apiFetch';

/** See https://zulipchat.com/api/delete-queue */
export default (auth: Auth, queueId: string): Promise<ApiResponseSuccess> =>
  apiDelete(auth, 'events', {
    queue_id: queueId,
  });
