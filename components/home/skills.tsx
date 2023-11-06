import { MENULINKS, SKILLS } from "../../constants";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const SKILL_STYLES = {
  SECTION:
    "w-full relative select-none mb-24 section-container py-12 flex flex-col justify-center",
  SKILL_TITLE: "section-title-sm mb-4 seq",
};

const SkillsSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return revealAnimationRef.kill;
  }, [targetSection]);

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <h1 className="section-heading seq mt-2">SKILLS</h1>
      <h2 className="text-2xl md:max-w-2xl w-full seq mt-2">
        Quick to adapt and embrace new technologies and tools based on project
        and company requirements.
      </h2>
    </div>
  );

  const renderBackgroundPattern = (): React.ReactNode => (
    <>
      <div className="absolute right-0 -bottom-3/5 w-1/5 max-w-xs md:flex hidden justify-end">
        <Image
          src="/pattern-r.svg"
          loading="lazy"
          height={700}
          width={320}
          alt="pattern"
        />
      </div>
      <div className="absolute left-0 -bottom-3 w-1/12 max-w-xs md:block hidden">
        <Image
          src="/pattern-l.svg"
          loading="lazy"
          height={335}
          width={140}
          alt="pattern"
        />
      </div>
    </>
  );

  const renderSkillColumn = (
    title: string,
    skills: string[]
  ): React.ReactNode => (
    <>
      <h3 className={SKILL_STYLES.SKILL_TITLE}>{title}</h3>
      <div
        className={`flex flex-wrap seq ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        {skills.map((skill) => (
          <Image
            key={skill}
            src={`/skills/${skill}.svg`}
            alt={skill}
            width={76}
            height={76}
            className="skill"
          />
        ))}
      </div>
    </>
  );

  return (
    <section className="relative">
      {renderBackgroundPattern()}
      <div
        className={SKILL_STYLES.SECTION}
        id={MENULINKS[2].ref}
        ref={targetSection}
      >
        <div className="flex flex-col skills-wrapper">
          {renderSectionTitle()}
          <div className="text-strong mt-10 ">
            {renderSkillColumn(
              "Programming Languages",
              SKILLS.programmingLanguages
            )}
          </div>
          <div className="text-strong mt-5 ">
            {renderSkillColumn("Frontend", SKILLS.frontend)}
          </div>
          <div className="text-strong mt-5 ">
            {renderSkillColumn("Backend", SKILLS.backend)}
          </div>
          <div className="text-strong mt-5 ">
            {renderSkillColumn("Markup Technologies", SKILLS.markup)}
          </div>
          <div className="text-strong mt-5 ">
            {renderSkillColumn("Data Visualization & Databases", SKILLS.dVDB)}
          </div>
          <div className="text-strong mt-5 ">
            {renderSkillColumn("Cloud Solutions", SKILLS.cloud)}
          </div>
          <div className="text-strong mt-5 ">
            {renderSkillColumn("WEB3 Skills", SKILLS.web3)}
          </div>
          <div className="text-strong mt-5 ">
            {renderSkillColumn("Other", SKILLS.other)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
