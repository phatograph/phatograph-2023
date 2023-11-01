import React from 'react'
import {NextPage} from 'next'
// import className from 'classnames'
import Head from 'next/head'

const Index: NextPage<{}> = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Resume · Pat Wangrungarun</title>
      </Head>

      <div className='Home'>
        <div className='container'>
          <div className='Home__left'>
            <img
              src='http://www.gravatar.com/avatar/669eba01a4293df2f86fb10857efa0af?s=640'
              alt='phatograph'
            />
          </div>

          <div className='Home__right'>
            <h1 className='Home__h1'>
              <span>Pat</span>
              <span>Wangrungarun</span>
            </h1>

            <p className='Home__p'>
              Tokyo, Japan · born in 1987
              <br />
              phatograph@gmail.com
              <br />
              <a
                href='//phatograph.com'
                target='_blank'
                rel='nofollow noopener noreferrer'
              >
                phatograph.com
              </a>
            </p>
          </div>

          <h2 className='Table__left'>Experience</h2>

          <div className='Table__right'>
            {(() => {
              const data = [
                {
                  title: 'Front-end developer',
                  company: 'Nanameue Inc.',
                  time: '2016–2019, 2022-present',
                  lis: [
                    'Primary stacks consist of Next.js with Redux and Ruby on Rails. Products varies from a twitter-like social network with millions of users, a web application featuring an NTF marketplace, and a web3 dashboard that interacts with Ethereum contracts.',
                    'Specialised in implementing off-the-grid designs and interactive and animating graphs and charts.',
                    'Formerly Senior Front-end/Rails developer. Relocated to Thailand once in 2019, returned in 2022.',
                  ],
                },
                {
                  title: 'Front-end development team leader',
                  company: 'Data Wow Co., Ltd.',
                  time: '2019–2022',
                  lis: [
                    'Developed web applications using Ruby on Rails, Next.js, and Redux. Adopted Docker for development environment. Primary project was a video call platform with an e-commerce service.',
                    'In my younger days I could hardly imagine myself being a team leader, but I was one then. So stuff like reports, process trackings, and task management were my new norm.',
                  ],
                },
                {
                  title: 'Front-end/Rails developer',
                  company: 'Oozou Limited',
                  time: '2012–2014',
                  lis: [
                    'Developed web applications using on Ruby on Rails and AngularJS. Products varied from a startup management system, a real estate management system, a wiki system with a medium-like text editor, and an asset management system with interactive graphs.',
                    'Switched to VIM, one of my best decision ever.',
                  ],
                },
                {
                  title: 'Software engineer',
                  company: 'Thomson Reuters Software Thailand',
                  time: '2010–2012',
                  lis: [
                    'Developed a content management application platform using ASP.net C# WebForm. Maintained and improved Thread-based Windows Service.',
                    'Adapted an existing complex CSS and JavaScript to support modern browsers.',
                  ],
                },
                {
                  title: 'Front-end developer',
                  company: 'Ecartstudio',
                  time: '2009–2010',
                  lis: [
                    'Developed a custom city map and point of interests web application using ASP.net C# MVC, and a content management system using PHP.',
                  ],
                },
              ]

              return (
                <dl className='Data'>
                  {data.map((x, i) => (
                    <div key={i} className='Data__item'>
                      <dt className='Data__dt'>
                        <span>{x.company}</span>
                        <small>{x.time}</small>
                      </dt>

                      <small className='Data__small'>{x.title}</small>

                      <ul className='Data__ul'>
                        {x?.lis?.map((y, j) => (
                          <li key={j} className='Data__ul__li'>
                            {y}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </dl>
              )
            })()}
          </div>

          <h2 className='Table__left'>Education</h2>

          <div className='Table__right'>
            {(() => {
              const data = [
                {
                  company:
                    'University of St Andrews · <br />Maynooth University',
                  time: '2014 – 2016',
                  description: `MSc in Dependable Software Systems <br />
                (Erasmus Mundus two years programme)`,
                },
                {
                  company: 'CHULALONGKORN UNIVERSITY',
                  time: '2004 – 2008',
                  description: `BSc in Computer Science (2<sup>nd</sup> honour)`,
                },
              ]

              return (
                <dl className='Data'>
                  {data.map((x, i) => (
                    <div key={i} className='Data__item'>
                      <dt className='Data__dt'>
                        <span dangerouslySetInnerHTML={{__html: x.company}} />
                        <small>{x.time}</small>
                      </dt>

                      <dd
                        className='Data__dd'
                        dangerouslySetInnerHTML={{__html: x.description}}
                      />
                    </div>
                  ))}
                </dl>
              )
            })()}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Index
