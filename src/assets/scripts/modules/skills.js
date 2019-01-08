import Vue from 'vue'

const skill = {
    props: {
        skillPercentage: Number,
        skillTitle: String
    },
    template: '#skill'
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