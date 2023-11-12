import { useEffect } from 'react';
import { data } from '../../contents/about'

const About = ({
    onInitial,
    title = "",
}) => {

    const SECTION_ID = `${title}-section`;

    useEffect(() => {
        onInitial(SECTION_ID);
    }, [])

    return (
        <div className='space-y-1 px-2 scroll-m-14' id={SECTION_ID}>
            <div className='text-primaryAccent font-semibold'>{data.title}</div>
            <div>{data.description}</div>
            <div>{data.since}</div>
            <div>{data.bachelor}</div>
            <div>{data.faculty}</div>
            <div>{data.major}</div>
        </div>
    )
}

export default About;