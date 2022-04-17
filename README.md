# JSONBlob_ASE220
JSON Blob recreation for ASE220
This project requires express and fs packages. 

Error message following get and put:
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at new NodeError (node:internal/errors:371:5)
    at ServerResponse.setHeader (node:_http_outgoing:576:11)
    at D:\Documents\OneDrive\Documents\NKU\jsonblob\main.js:22:7
    at Layer.handle [as handle_request] (D:\Documents\OneDrive\Documents\NKU\jsonblob\node_modules\express\lib\router\layer.js:95:5)
    at next (D:\Documents\OneDrive\Documents\NKU\jsonblob\node_modules\express\lib\router\route.js:137:13)
    at Route.dispatch (D:\Documents\OneDrive\Documents\NKU\jsonblob\node_modules\express\lib\router\route.js:112:3)
    at Layer.handle [as handle_request] (D:\Documents\OneDrive\Documents\NKU\jsonblob\node_modules\express\lib\router\layer.js:95:5)
    at D:\Documents\OneDrive\Documents\NKU\jsonblob\node_modules\express\lib\router\index.js:281:22
    at param (D:\Documents\OneDrive\Documents\NKU\jsonblob\node_modules\express\lib\router\index.js:360:14)
    at param (D:\Documents\OneDrive\Documents\NKU\jsonblob\node_modules\express\lib\router\index.js:371:14)
