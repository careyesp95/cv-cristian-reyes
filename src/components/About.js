import './About.css';


function About(){
    const about =[
        {
            title:'About Me',
            descripction:`As a Full stack developer, I have learned good practices using cutting-edge development tools and techniques, furthermore technological skills such as: JavaScript, Python, HTML5, CSS3, Bootstrap, NodeJs, ReactJs, ReduxJs, Expess, Sequelize, PostgreSQL, MongoDB, Docker, Virtual Machines, UX/UI Figma, Control Version. On the other hand, I characterize myself to be a team player who thrives in collaborating with cross-functional teams to build outstanding web applications.`,
        }
    ]
    return (
        <main className='container-about' id='about'>
            <div className='boxing-div-animation'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='section-about'>
                <img src='./programadorBackground.png'/>
                <p>
                    {
                    about && about.map(e => {
                        return (
                            <>
                                <h6>{e.title}</h6>
                                <p>{e.descripction}</p>
                            </>
                        )
                    }) 
                    }
                </p>
            </div>
        </main>
    )
}

export default About;