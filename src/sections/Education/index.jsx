import {data} from '../../contents/Education'

const Education =()=> {
    return(
        <div className='space-y-1'>
            <div className='font-semibold text-xl'>{data.title}</div>
            <div className='pl-10 font-semibold'>{data.university}</div>
            <div className='pl-20'>{data.since}</div>
            <div className='pl-20'>{data.bachelor}</div>
            <div className='pl-20'>{data.faculty}</div>
            <div className='pl-20'>{data.major}</div>

            
        </div>
        
        
    )
}
export default Education;