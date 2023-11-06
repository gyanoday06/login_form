import Cards from "../components/Cards"

export default{
    title: "components/Cards",
    component: "Cards"
}

const Template = (args) => <Cards {...args}/>

export const cards = Template.bind({})

cards.args = {
    title: "Title",
    desc: "Description",
    btndes: "Go",
    width: 5,
    number: 2,
}