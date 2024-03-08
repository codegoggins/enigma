import React from 'react';
import Divider from '../../components/utility/divider/Divider';
import { BiUpvote,BiDownvote} from "react-icons/bi";
import { LiaComments } from "react-icons/lia";
import { IoBookmarksOutline} from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const SinglePost = () => {
  return (
    <div className='w-full p-6 flex items-center justify-center'>
        <div className='w-full flex flex-col px-[16rem]'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-[3rem] font-[600] text-blackPrimary font-brygada'>Disruption Comes to Google</h1>
                <div className='flex items-center justify-between'>
                  <div className='flex items-start gap-2'>
                     <img className='h-[3rem] w-[3rem] rounded-full' src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                     <h1 className='text-blackTertiary'>Nilay Singh</h1>
                  </div>
                  <div>
                    <h1 className='text-blackTertiary'>21 March, 2024</h1>
                  </div>
                </div>
            </div>
            <Divider/>
            <div className='flex items-center justify-between'>
               <div className='flex items-center gap-3 text-[1.5rem] font-[400] text-blackTertiary font-brygada'>
                    <h1 className='cursor-pointer flex items-center gap-[0.2rem] text-[1.6rem]'><BiUpvote /><span className='text-[0.9rem] font-[500]'>24</span></h1>
                    <h1 className='cursor-pointer flex items-center gap-[0.2rem] text-[1.6rem]'><BiDownvote/><span className='text-[0.9rem] font-[500]'>13</span></h1>
                    <h1 className='cursor-pointer flex items-center gap-[0.2rem] text-[1.8rem]'><LiaComments /><span className='text-[0.9rem] font-[500]'>6</span></h1>
               </div>
               <div className='flex items-center gap-3 text-[1.5rem] text-blackTertiary'>
                    <h1 className='cursor-pointer'><IoBookmarksOutline/></h1>
                    <h1 className='cursor-pointer'><BsThreeDots/></h1>
               </div>
            </div>
            <Divider/>
            <div>
                <h1 className='font-brygada text-[1.1rem] leading-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae mollitia cupiditate quisquam laudantium quod quia porro, culpa officia vel? Consectetur commodi quaerat reprehenderit quod cupiditate illum optio dignissimos quidem nisi distinctio ut beatae, molestias placeat. Molestiae, aperiam a illum aliquid corporis, dicta reprehenderit voluptas quidem numquam suscipit provident odit magnam, labore ea eum ullam quaerat ipsam id repudiandae architecto quasi nobis nihil? Incidunt quaerat cupiditate exercitationem ab dicta reiciendis cumque accusantium cum distinctio commodi iusto quam excepturi temporibus quidem voluptatum odio facere quae, reprehenderit illum doloremque! Quia officiis reiciendis in inventore, voluptates quo doloribus autem quae tempora. Quis dolorum incidunt obcaecati, eveniet eius dignissimos perferendis architecto pariatur maxime impedit. Velit tenetur pariatur quia id aut, alias maxime. Reiciendis beatae accusamus asperiores hic assumenda dolor voluptatum tempore animi? Quo modi repellat sed accusamus harum quibusdam eaque, recusandae consequatur id deserunt magni qui deleniti eveniet unde repudiandae ducimus minus inventore veniam perspiciatis, temporibus at praesentium ullam adipisci mollitia. Doloremque non et possimus pariatur saepe officia voluptates dolorum ad, nobis suscipit animi vel dolores consequatur quia quos, commodi velit quisquam sunt beatae impedit. Perferendis nam et natus earum quos cumque suscipit ad velit quam, maiores adipisci inventore molestiae, veniam corporis eius culpa dolorem sint nobis. Iure vero a quae eveniet ducimus, laborum sed quis. Voluptatem, perspiciatis magnam veniam vero veritatis maxime reprehenderit illum eius omnis id asperiores aspernatur iusto ea, cupiditate nesciunt quas possimus laudantium quasi quod, sint perferendis! Enim quos ipsa, minima odio cumque beatae cupiditate! Tempore, repellat quidem! Quia architecto repellat numquam adipisci? Suscipit temporibus sequi nobis odit tempora enim adipisci et eum at ex? Debitis, doloremque exercitationem optio ea officia placeat! Rerum optio rem, inventore corrupti praesentium voluptas blanditiis repellendus tempore soluta omnis facilis, aperiam amet? Reiciendis vero vel quasi, officia adipisci ratione, architecto nisi quae ducimus esse explicabo! Porro.</h1>
            </div>
            <Divider/>
            {/* TAGS */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='bg-lightGray p-3 px-6 rounded-[4rem] flex items-center justify-center cursor-pointer hover:bg-darkGray'>
                        <h1 className='text-blackPrimary font-brygada text-[0.9rem]'>Design</h1>
                    </div>
                    <div className='bg-lightGray p-3 px-6 rounded-[4rem] flex items-center justify-center cursor-pointer hover:bg-darkGray'>
                        <h1 className='text-blackPrimary font-brygada text-[0.9rem]'>Innovation</h1>
                    </div>
                    <div className='bg-lightGray p-3 px-6 rounded-[4rem] flex items-center justify-center cursor-pointer hover:bg-darkGray'>
                        <h1 className='text-blackPrimary font-brygada text-[0.9rem]'>Google</h1>
                    </div>
                </div>
                <div className='flex items-center gap-3 text-[1.5rem] text-blackTertiary'>
                    <h1 className='cursor-pointer'><IoBookmarksOutline/></h1>
                    <h1 className='cursor-pointer'><BsThreeDots/></h1>
               </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePost