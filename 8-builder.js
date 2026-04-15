class HTMLBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.title = '';
    this.image = '';
    this.description = '';
    this.buttonText = '';
    this.link = '';
    return this;
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  setImage(imageUrl) {
    this.image = imageUrl;
    return this;
  }

  setDescription(description) {
    this.description = description;
    return this;
  }

  setButton(text) {
    this.buttonText = text;
    return this;
  }

  setLink(url) {
    this.link = url;
    return this;
  }

  build() {
    let html = '<div class="card">\n';

    if (this.title) {
      html += `  <h2>${this.title}</h2>\n`;
    }

    if (this.image) {
      html += `  <img src="${this.image}" alt="${this.title}" />\n`;
    }

    if (this.description) {
      html += `  <p>${this.description}</p>\n`;
    }

    if (this.buttonText && this.link) {
      html += `  <a href="${this.link}" class="button">${this.buttonText}</a>\n`;
    } else if (this.buttonText) {
      html += `  <button>${this.buttonText}</button>\n`;
    }

    html += '</div>';

    this.reset();

    return html;
  }
}

// Usage Examples
// Example 1: Full card with all elements
const fullCard = new HTMLBuilder()
  .setTitle('My Card')
  .setImage('url.jpg')
  .setDescription('This is a card.')
  .setButton('Click Me')
  .setLink('https://example.com')
  .build();

console.log('Full Card:');
console.log(fullCard);

// Example 2: Minimal card with just title and description
const minimalCard = new HTMLBuilder()
  .setTitle('Simple Card')
  .setDescription('Just a simple card.')
  .build();

console.log('\nMinimal Card:');
console.log(minimalCard);

// Example 3: Image card
const imageCard = new HTMLBuilder()
  .setTitle('Gallery Item')
  .setImage('photo.jpg')
  .setButton('View')
  .build();

console.log('\nImage Card:');
console.log(imageCard);

module.exports = { HTMLBuilder };
