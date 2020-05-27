import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

import styles from "./BackToTop.module.scss";

const ScrollArrow = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 200) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 200) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	window.addEventListener("scroll", checkScrollTop);

	return (
		<FaArrowCircleUp
			className={styles.scrollTop}
			onClick={scrollTop}
			style={{ display: showScroll ? "block" : "none" }}
		/>
	);
};

export default ScrollArrow;
