webpackJsonp([33],{"./node_modules/json-loader/index.js!./.cache/json/tag-recursion.json":function(e,n){e.exports={pathContext:{posts:[{excerpt:"Recursion is one of the initial courses we take in every CS university, with the most used example being the Fibonacci sequence: This works great in most of the languages we've been taught, but with asynchronous environments such as Node.js, things...",html:'<p>Recursion is one of the initial courses we take in every CS university, with the most used example being the Fibonacci sequence:</p>\n<pre><code class="javascript">\nlet recursive = (n) => {\n  if(n <= 2) {\n    return 1\n  } else {\n    return recursive(n - 1) + recursive(n - 2);\n  }\n};\n</code></pre>\n<p>This works great in most of the languages we\'ve been taught, but with asynchronous environments such as Node.js, things are getting tricky. Using asynchronous functions, we need to wait for the function to end before call the next iteration of the recursion.</p>\n<p>Say we need to recursively delete an item and all of it\'s children from a connected list.</p>\n<pre><code class="javascript">\nlet recursivelyDelete = (id) => {\n  db.items.findOne(id, (err, item) => {\n    if(err) {\n      callback(err)\n    } else {\n      db.items.remove({ \'_id\': item._id}, (err, results) => {\n        if(err) {\n          callback(err)\n        } else {\n          if(item.child_id) {\n            recursivelyDelete(item.child_id)\n          } else {\n            return true\n          }\n        }\n      }\n    }\n  }\n}\n</code></pre>\n<p>You can find all different recursion patterns for Node.js <a href="http://metaduck.com/01-asynchronous-iteration-patterns.html">here</a>.</p>\n<p>This is all good but you can see how easily can lead to a callback hell. What if we had to do some checks before the deletion? Or update something else? What about a tree structure with multiple children?</p>\n<p>Fortunately, we can use <a href="https://www.promisejs.org/">Promises</a>. Let\'s rewrite.</p>\n<pre><code class="javascript">\nlet recursivelyDelete = (id) => {\n  let item\n  return findOne(id)\n    .then((document) => {\n      item = document\n\n      if(item.child_id) {\n        return recursivelyDelete(item.child_id)\n      } else {\n        return true;\n      }\n\n    })\n    .then(() => {\n      return remove(item._id)\n    })\n    .catch((err) => {\n      console.log(err)\n    })\n}\n\nlet remove = (id) => {\n  return new Promise((resolve, reject) => {\n    db.remove(id, (err, item) => {\n      if(err) {\n        return reject(err)\n      } else {\n        return resolve()\n      }\n  })\n}\n\nlet findOne = (id) => {\n  return new Promise((resolve, reject) => {\n    db.findOne(id, (err, item) => {\n      if(err) {\n        return reject(err)\n      } else {\n        return resolve(item)\n      }\n  })\n}\n</code></pre>\n<p>We can see how it\'s better written and can easily scale and more functions can be added.</p>\n<p>Here\'s a more complicated example. Say we need to handle the deletion of a category in a tree. Given an ID, we have to check if the category exists and if there are dependent blog posts connected with that category. Only then, we have to run the same process for it\'s children and for their children. Delete all or reject. Deletion must go after the checks of all children, just like the above example.</p>\n<pre><code class="javascript">\nlet handleDeletion = (id) => {\n  findOne(id)\n    .then((item) => {\n       return recursivelyDelete(item)\n    })\n    .catch((err) => {\n      console.log(err)\n    })\n}\n\nlet findOne = (id) => {\n  return new Promise((resolve, reject) => {\n    db.findOne(id, (err, item) => {\n      if(err) {\n        return reject(err)\n      } else {\n        if(item) {\n          return reject()\n        } else {\n          return resolve(item)\n        }\n      }\n  })\n}\n\nlet recursivelyDelete = (item) => {\n  checkForDependencies(item._id)\n    .then(() => {\n      return getChildrenCategories(item._id)\n    })\n    .then((children) => {\n      let calls = []\n\n      children.forEach((c) => {\n        calls.push(recursivelyDelete(c._id))\n      })\n\n      return Promise.all(calls)\n    })\n    .then(() => {\n      return remove(item._id)\n    })\n    .catch((err) => {\n      console.log(err)\n    })\n}\n\nlet checkForDependencies = (id) => {\n  return new Promise((resolve, reject) => {\n    db.products.find({ category_id: id }, (err, results) => {\n      if(err) {\n        return reject(err)\n      } else {\n        if(results && results.length) {\n          return reject()\n        } else {\n          return resolve()\n        }\n      }\n  })\n}\n\nlet getChildrenCategories = (id) => {\n  return new Promise((resolve, reject) => {\n    db.categories.find({ parent_id: id }, (err, results) => {\n      if(err) {\n        return reject(err)\n      } else {\n        return resolve(results)\n      }\n  })\n}\n\nlet remove = (id) => {\n  return new Promise((resolve, reject) => {\n    db.categories.remove(id, (err, item) => {\n      if(err) {\n        return reject(err)\n      } else {\n        return resolve()\n      }\n  })\n}\n\n</code></pre>\n<br/>\n*Examples are written in [ES6](http://es6-features.org) with the [Promises API](https://www.promisejs.org/) which you can run using the latest [Node.js](https://nodejs.org/en/) v4 build*\n<br/>',id:"/Users/Bariotis/Dev/develop/gatsby-blog-starter-kit/src/pages/node-js-recursion/index.md absPath of file >>> MarkdownRemark",timeToRead:2,frontmatter:{date:"2015-10-01T13:54:36.000Z",path:"/node-js-recursion",tags:"recursion, javascript, node.js",title:"Node.js & Recursion",draft:null}}],tag:"recursion",pagesSum:1,page:1}}}});
//# sourceMappingURL=path---tag-recursion-f1ffc0f1465cce6c1283.js.map