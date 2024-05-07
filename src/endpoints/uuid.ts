import {
	OpenAPIRoute,
	OpenAPIRouteSchema,
	Query,
} from "@cloudflare/itty-router-openapi";
import { uuid, wordTriplet } from "../types";
import { generateSlug } from "random-word-slugs";
import { v4 as uuidv4 } from 'uuid';

export class uuidBaseIndex extends OpenAPIRoute {
	static schema: OpenAPIRouteSchema = {
		tags: ["ID", "UUID"],
		summary: "Generate a UUID",
		responses: {
			"200": {
				description: "Returns a single UUID",
				schema: {
					success: Boolean,
					result: uuid
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
		return {
			success: true,
			id: uuidv4()
		};
	}
}
