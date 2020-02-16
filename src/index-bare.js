/*TODO: check
<https://mozilla.github.io/nunjucks/api.html#custom-tags>*/

class NotImplementedError extends Error {
  constructor(m) {
    this.name="NotImplementedError";
    this.message=m !== null && m !== void 0 ? m : "Method is not implemented";
  }
}

class GalleryTag {
    tags = ['gallery'];

    parse (parser, nodes, lexer) {
        // parse the args and move after the block end. passing true
        // as the second arg is required if there are no parentheses
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(parser.nextToken().value);

        // parse the body
        var body = parser.parseUntilBlocks('endgallery');
        var errorBody = null;

        parser.advanceAfterBlockEnd();

        // See above for notes about CallExtension
        return new nodes.CallExtension(this, 'run', args, [body, errorBody]);
    }

    run (context, url, body, errorBody) {
        throw new NotImplementedError;
    }
}
