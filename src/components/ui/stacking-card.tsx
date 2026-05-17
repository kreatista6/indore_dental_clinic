'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  href?: string;
  isViewAll?: boolean;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  href = "#",
  isViewAll = false
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-[85vh] flex items-end justify-center sticky top-0 pb-[5vh]'
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          // Use translateY instead of top — GPU composited, no layout thrash
          translateY: `calc(5vh + ${i * 25}px)`,
        }}
        className={cn(`flex flex-col relative h-auto min-h-[400px] md:h-[520px] w-[95%] max-w-[900px] rounded-[2rem] p-6 md:p-10 origin-top text-white shadow-2xl border border-white/10`, isViewAll && "justify-center items-center")}
      >
        {isViewAll ? (
          <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
            <a 
              href={href}
              className="mt-4 px-8 py-4 bg-black text-white rounded-full font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              {description}
            </a>
          </div>
        ) : (
          <>
            <h2 className='text-2xl md:text-3xl font-bold mb-4'>{title}</h2>
            <div className={`flex flex-col md:flex-row h-full gap-6 md:gap-10`}>
              <div className={`w-full md:w-[45%] flex flex-col justify-center`}>
                <p className='text-base leading-relaxed text-slate-300'>{description}</p>
              </div>
              <div className={`relative w-full md:w-[55%] h-48 md:h-full rounded-2xl overflow-hidden`}>
                <motion.div className={`w-full h-full`} style={{ scale: imageScale }}>
                  <img src={url} alt={title} className='absolute inset-0 w-full h-full object-cover opacity-90' />
                </motion.div>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(({ projects }, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main className='bg-black' ref={container}>
        <>
          <section className='text-white h-[70vh] w-full bg-slate-950 grid place-content-center'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
              Stacking Cards Using <br /> Motion. Scroll down! 👇
            </h1>
          </section>
        </>

        <section className='text-white w-full bg-slate-950'>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        <footer className='group bg-slate-950'>
          <h1 className='text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
            ui-layout
          </h1>
          <div className='bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
        </footer>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component;
