import React from 'react'
import profilePhoto from '../assets/profilePhoto.png'
import { Button } from '@/components/ui/button'
import { DownloadIcon, MailIcon, FolderIcon } from 'lucide-react'

export default function PersonalStatement() {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mb-8">
        <div className="mb-6 md:mb-0 md:flex-shrink-0">
          <img
            src={profilePhoto}
            alt="Muhammad Sarmad Jafri"
            className="rounded-full w-48 h-48 mx-auto md:w-64 md:h-64 object-contain"
          />
        </div>
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-4">Professional Summary</h1>
          <div className="prose prose-lg max-w-none">
            <p>
              Entry-level SOC Analyst with a strong foundation in cybersecurity, network monitoring, and incident response. With hands-on experience using tools such as Wireshark, KALI Linux, and virtual machines, I am adept at identifying and analyzing security threats in real-time. My academic background in Computer Science, with a focus on Artificial Intelligence, combined with participation in hackathons and capture the flag competitions, has equipped me with a keen problem-solving ability and a passion for cybersecurity.
            </p>
            <p>
              Currently pursuing industry-recognized certifications, including CompTIA Security+, I am seeking an opportunity to contribute to a dynamic SOC team where I can grow my expertise and help defend against evolving cyber threats.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Explore My Work & Connect</h2>
        <p className="mb-6">
          I'm excited to share my projects and achievements with you. Feel free to explore my work, download my resume, or get in touch if you have any questions or opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="flex items-center">
            <FolderIcon className="mr-2 h-4 w-4" /> View My Portfolio
          </Button>
          <Button className="flex items-center">
            <DownloadIcon className="mr-2 h-4 w-4" /> Download Resume
          </Button>
          <Button className="flex items-center">
            <MailIcon className="mr-2 h-4 w-4" /> Contact Me
          </Button>
        </div>
        <p className="mt-6">Looking forward to connecting!</p>
      </div>
    </div>
  )
}