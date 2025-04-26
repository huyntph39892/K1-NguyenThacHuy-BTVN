const child = document.getElementById('child')
        const parent = document.getElementById('parent')
        const grandparent = document.getElementById('grandparent')
      
        child.addEventListener('click', function () {
            event.stopPropagation();
          console.log('Child clicked!')
        }, true)
      
        parent.addEventListener('click', function () {
            event.stopPropagation();
          console.log('Parent clicked!')
        }, true)
      
        grandparent.addEventListener('click', function () {
          console.log('Grandparent clicked!')
        }, true)