let page = {
    
    init: function() {

        this.btnAdd = document.querySelector("#form-btn");
        this.inp = document.querySelector("#form-inp");
        this.ul = document.querySelector("#form-list");
        this.redraw();
        let self = this;

        this.btnAdd.addEventListener("click", () => {
            self.add(self.inp.value);
        });
    },

    redraw:function(){
        this.ul.innerHTML="";
        let arr = JSON.parse(localStorage.getItem('inputs')) || [];
        
        if (arr === null) {
            localStorage.setItem('inputs', '');
        } else {
            for (let i in arr) {
                this.first = this.ul.firstChild;
                this.taskblock = this.createTaskBlock(arr[i],i);
                this.ul.insertBefore(this.taskblock, this.first);
            }
        }
    },

    add: function(name){
        let arr = JSON.parse(localStorage.getItem('inputs')) || [];
        arr.push(name);
        localStorage.setItem('inputs', JSON.stringify(arr));
        this.redraw();
    },

    createTaskBlock: function(task,ind){
        let li = document.createElement("li");
        li.className="item";
        li.innerText = task;
        li.dataset.id=ind;

        return li;
    },
}

window.addEventListener("load",function(){
	page.init();
});