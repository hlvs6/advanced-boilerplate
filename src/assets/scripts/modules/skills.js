import Vue from 'vue'

const skill = {
    props: {
        skillPercentage: Number,
        skillTitle: String
    },
    template: '#skill',
    methods: {

        drawCircleDependsOnPercentage() {
            const circle = this.$refs['circle']; 
            const dashOffset = parseInt(
                getComputedStyle(circle).getPropertyValue('stroke-dashoffset')
            );
            const percent = (dashOffset/100) * (100 - this.skillPercentage);
            circle.style.strokeDashoffset = percent;
        }
    },
    mounted() {
        
        this.drawCircleDependsOnPercentage();
    }
}

const skillsRow = {
    props: {
        skillsGroupObj: Object
    },
    components: {
        skill
    },
    template: '#skills-row'
} 

new Vue({
    el: '#skills-component',
    components: {
        skillsRow
    },
    data() {
        return {
            skills: {}
        }
    },
    created() {
        this.skills = require('../../../data/skills.json')
    },
    template: '#skills-list',
})