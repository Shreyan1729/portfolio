import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, href }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="flex items-center justify-between gap-1 mt-7">
        <div className="flex flex-col flex-1">
          <p className="text-white font-medium text-[16px]">
            <a href={href}>
              <span className="blue-text-gradient">@</span> {name}
            </a>
          </p>
          <p className="mt-1 text-secondary text-[12px]">{designation}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            What my friends & colleagues say
          </p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

// 1 Your hand looks heavy can I hold it for you.
// 2 No pen no paper but you still draw my attention .
// 3 If I had to rate you from 1 to 10 I would say 9 because I would be the one
// 4 You look so familiar. I think I’ve seen you in my dreams
// 5 Do you play soccer? Because you’re a keeper.
// 6 I’d never play hide and seek with you because someone like you is impossible to find.
// 7 Are you netflix? Because i could watch you for hours.
// 8 Are you a bank loan? Because you got my interest.
// 9 I’m not electrician, but I can light up your day.
// 10 Are you a keyboard? Because you’re just my type
