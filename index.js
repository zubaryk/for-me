

(function() {
    let doc = document,
        index = 1;
    let Carousel = function() {
        this.box = doc.querySelector('.wrapper-card');
        this.slidesBox = doc.querySelector('.wrapper-card');
        this.slides = doc.querySelectorAll('.container-card');
        this.btns = doc.querySelectorAll('.button-arrow');
        this.size = this.box.clientWidth;

        this.position();
        this.cycle();
    };

        Carousel.prototype.position = function() {
            let size = this.size;
            this.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        }

        Carousel.prototype.cycle = function() {
            let i, max = this.btns.length,
            that = this;

            for(i = 0; i < max; i += 1) {
                that.btns[i].addEventListener('click', Carousel[that.btns[i].id].bind(null,that));
            }
        }

        Carousel.prev = function(box) {
            box.slidesBox.style.transition = 'transform .20s easy-in-out';
            let size = box.size;
            index <= 0 ? false : index--;
            box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
            box.jump();
        };
        Carousel.next = function(box) {
            box.slidesBox.style.transition = 'transform .3s easy-in-out';
            let max = box.slides.length;
            let size = box.size;
            index >= max - 1 ? false : index++;
            box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
            box.jump();
        };

        Carousel.prototype.jump = function() {
            let that = this;
            let size = this.size;
            this.slidesBox.addEventListener('transitionend', function() {
                that.slides[index].id === "firstClone" ? index = 1 : index;
                that.slides[index].id === "lastClone" ? index = that.slides.length - 2 : index;
                that.slidesBox.style.transition = "none";
                that.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
            });
        }
        




        new Carousel();
    


    })();
