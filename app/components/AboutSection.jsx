"use client"

import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>React</li>
                <li>Next</li>
                <li>React Native</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Udemy</li>
                <li>Youtube</li>
                <li>Self learing</li>
                <li>Ebonyi State University Abakaliki, Ebonyi State</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>B.S.C Computer Science</li>
                <li> Complete Web Developer Course By Rop Percival, Udemy</li>
            </ul>
        )
    }
   
]

export default function AboutSection() {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabeChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
  return (
  <section className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
            src="/images/java1.jpeg"
            width={500}
            height={500}
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
                I am a full stack developer/ programmer both for Web and Mobile, I have passion for creating
                interactive and responsive applications. i have experirnce working with javascript, React, 
                Node.js, Express, MongoDB, Mongoose, HTML, CSS and Git. I am a quick learner and i am always 
                looking to expand my knowledge and skill set. i'm also a team player and i love working 
                with others to create amazing applications
            </p>
            <div className='flex flex-row mt-8'>
                <TabButton
                    selectTab={() => handleTabeChange("skills")}
                    active={tab === "skills"}
                >
                  {" "}
                  Skills {" "}
                </TabButton>
                <TabButton
                    selectTab={() => handleTabeChange("education")}
                    active={tab === "education"}
                >
                  {" "}
                  Education {" "}
                </TabButton>
                <TabButton
                    selectTab={() => handleTabeChange("certifications")}
                    active={tab === "certifications"}
                >
                  {" "}
                  Certification {" "}
                </TabButton>
            </div>
            <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
    </div>
  </section>
  )
}
