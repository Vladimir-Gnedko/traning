let chainMaker = {
    chain: [],
    getLength:  function() {
        return this.chain.length
    },
    addLink: function(value) {
        this.chain.push(value)
        return this;
    },
    removeLink: function(position) {
        this.chain.splice(position,1)
        return this;
    },
    reverseChain: function() {
      this.chain = this.chain.reverse()
      return this;
    },
    finishChain: function() {
        return this.chain.map(item => `(${item})`).join('~~')
    }
}

console.log(
    chainMaker.addLink('pasha')
              .addLink('vova')
              .addLink('jenya')
              .removeLink(3)
              .reverseChain()
              .finishChain()
)