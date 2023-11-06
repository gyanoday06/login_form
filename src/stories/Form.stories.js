import Form from "../components/Form"

export default{
    title: "components/Form",
    component: "Form",
}

const Template = (args) => <Form {...args} />

export const form = Template.bind({})

form.args = {
    size: 50,
}
