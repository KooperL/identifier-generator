import { OpenAPIRouter } from "@cloudflare/itty-router-openapi";
import { wordsBaseIndex } from "./endpoints/words";
import { uuidBaseIndex } from "./endpoints/uuid";

export const router = OpenAPIRouter({
	docs_url: "/",
});

router.get("/api/words/", wordsBaseIndex);
router.get("/api/uuid/", uuidBaseIndex);

// 404 for everything else
router.all("*", () =>
	Response.json(
		{
			success: false,
			error: "Route not found",
		},
		{ status: 404 }
	)
);

export default {
	fetch: router.handle,
};
