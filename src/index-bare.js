class GalleryTag extends Tag {
  constructor() {
    super('gallerytag');
    this.nodeName='div';
    this.tagName='gallery';
  }
  render(context, attrs, body) {
    // provide your custom logic
    return super.render(context, attrs, body());
  }
}
