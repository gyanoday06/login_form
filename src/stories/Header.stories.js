import Header from "../components/Header"

export default{
    title: "components/Header",
    component: "Header",
}

const Template = (args) => <Header {...args}/>;

export const header = Template.bind({})

header.args = {
    imgWidth: 2,
    size: "lg",
    dropTitle: "Drop Down",
}