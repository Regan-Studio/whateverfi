import type { APIRoute } from "astro";
import { markdownResponse, CONTACT_MARKDOWN } from "../agent-content";

export const GET: APIRoute = ({ request }) =>
  markdownResponse(CONTACT_MARKDOWN, request.method);
