let page = {
    
    init: function() {

        this.btnAdd = document.querySelector("#form-btn");
        this.inp = document.querySelector("#form-inp");
        this.ul = document.querySelector("#form-list");
        this.redraw();
        let self = this;

        this.btnAdd.addEventListener("click", () => {
            self.add(self.inp.value);
            this.inp.value = '';
        });
        this.ul.addEventListener("click", (e) => {
            if(e.target.matches(".item")) {
                self.taskDone(e.target.dataset.id);
            }
        });
    },

    taskDone: function(id){
        let arr = JSON.parse(localStorage.getItem('inputs')) || [];
        arr[id].status = 1;
        let el = arr.splice(id,1);
        arr.unshift(el[0]);
        localStorage.setItem('inputs', JSON.stringify(arr));
        this.redraw();
    },

    redraw: function(){

        this.ul.innerHTML='';
        let arr = JSON.parse(localStorage.getItem('inputs')) || [];
        
        if (arr === null) {
            localStorage.setItem('inputs', '');
        } else {
            for (let i in arr) {
                this.first = this.ul.firstChild;
                this.taskblock = this.createTaskBlock(arr[i].name,i);
                if(arr[i].status == 1) {
                    this.taskblock.classList.add('checked');
                }
                this.ul.insertBefore(this.taskblock, this.first);
            }
        }
    },

    add: function(name){
        let arr = JSON.parse(localStorage.getItem('inputs')) || [];
        arr.push({name:name,'status':0});
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