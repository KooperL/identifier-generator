> [!IMPORTANT]  
> This project was too small in scope to maintain as a stand alone repo. It's been merged with [http-utils](https://github.com/KooperL/http-utils)

# identifier-generator

HTTP wrapper for:
 - `random-word-slugs` - [npm](https://www.npmjs.com/package/random-word-slugs)
 - `uuid` - [npm](https://www.npmjs.com/package/uuid)

>`random-word-slugs` A handy utility to create those random word slugs (e.g., generous-pink-biscuit) you see all over the place.
>`uuid` is a JavaScript implementation of the full UUID spec ([RFC9562](https://www.rfc-editor.org/rfc/rfc9562.html))

Moving utility functions to API endpoints instead of importing libraries directly can significantly improve cross-language compatibility and provide access to runtimes or languages with less rich community support.


Key benefits:
 - Language-agnostic implementation - use anywhere
 - Centralized updates and maintenance
 - Easy to scale independently of client applications
 - Built-in usage monitoring and access control
 - Consistent behavior across all consuming applications

Main trade-offs to consider when using `http-utils`:
 - Network latency vs direct function calls
 - Infrastructure costs for hosting APIs (for self hosting)
 - Additional complexity for simple utilities which are available in std lib
 - Requires internet connectivity