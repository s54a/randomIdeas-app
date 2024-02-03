class Idealist {
  constructor() {
    this._ideaListElement = document.querySelector("#idea-list");
    this.idea = [
      {
        id: 1,
        text: "Milk cartons that turn a different color the older that your milk is getting",
        tag: "INVENTIONS",
        username: "Rodegers",
        date: "12/12/2012",
      },
      {
        id: 2,
        text: "ATM location app which lets you know where the closest ATM is and if it is in service",
        tag: "SOFTWARE",
        username: "Bruce Banner",
        date: "22/02/2012",
      },
    ];

    this._validTags = new Set();
    this._validTags.add("technology");
    this._validTags.add("software");
    this._validTags.add("business");
    this._validTags.add("education");
    this._validTags.add("health");
    this._validTags.add("inventions");
  }

  getTagClass(tag) {
    tag = tag.toLowerCase();
    let tagClass = "";

    if (this._validTags.has(tag)) {
      tagClass = `tag-${tag}`;
    } else {
      tagClass = "";
    }

    return tagClass;
  }

  render() {
    this._ideaListElement.innerHTML = this.idea.map((idea) => {
      const tagClass = this.getTagClass(idea.tag);
      console.log(tagClass, idea.tag);
      return `
        <div class="card">
          <button class="delete"><i class="fas fa-times"></i></button>
          <h3>${idea.text}</h3>
          <p class="tag ${tagClass}">${idea.tag.toUpperCase()}</p>
          <p>
            Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span>
          </p>
        </div>
      `;
    });
  }
}

export default Idealist;
