import {
	OpenAPIRoute,
	OpenAPIRouteSchema,
	Query,
} from "@cloudflare/itty-router-openapi";
import { wordTriplet } from "../types";
import { generateSlug } from "random-word-slugs";

export class wordsBaseIndex extends OpenAPIRoute {
	static schema: OpenAPIRouteSchema = {
		tags: ["ID", "Words"],
		summary: "Generate a joined list of words",
		parameters: {
			length: Query(Number, {
				description: "Number of words",
				default: 3,
			}),
		},
		responses: {
			"200": {
				description: "Returns a group of words, joined by a hyphen",
				schema: {
					success: Boolean,
					result: wordTriplet
				},
			},
		},
	};

	async handle(
		request: Request,
		env: any,
		context: any,
		data: Record<string, any>
	) {
		// // Retrieve the validated parameters
		const { length } = data.query;
		const wordLimit = Math.min(Math.max(length, 1), 10);

		return {
			success: true,
			id: generateSlug(wordLimit),
		};
	}
}
