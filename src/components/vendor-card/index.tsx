import React from "react";
import type { FC } from "react";
import { GoStarFill, GoStar } from "react-icons/go";

import styles from "./styles.module.scss";
import { classNameCreator } from "@src/utils";

const POSITIVE_RATE_AREA = 4.5;

interface VendorCardProps {
  background: string;
  logo: string;
  title: string;
  rate: number;
  description: string;
  isOpen: boolean;
  commentCount: number;
  deliveryFee: number;
  deliveryGuarantee: boolean;
}

const VendorCard: FC<VendorCardProps> = ({
  background,
  description,
  logo,
  rate,
  title,
  isOpen,
  commentCount,
  deliveryFee,
  deliveryGuarantee,
}) => {
  return (
    <div className={styles.vendorCard}>
      <div className={styles.vendorCardImageContainer}>
        <img src={background} className={styles.vendorCardImage} />
      </div>
      <div className={styles.logo}>
        <img src={logo} />
      </div>

      <div className={styles.vendorCardDescriptionContainer}>
        <div className={styles.title}>
          <div className={styles.rate}>
            <div
              className={
                rate >= POSITIVE_RATE_AREA
                  ? styles.positiveRateTag
                  : styles.negativeRateTag
              }
            >
              <div className={styles.star}>
                {rate >= POSITIVE_RATE_AREA ? <GoStarFill /> : <GoStar />}
              </div>
              <div>{rate}</div>
            </div>
            <span className={styles.commentCount}>({commentCount})</span>
          </div>
          <h3>{title}</h3>
        </div>

        <div className={styles.description}>
          <div>{description}</div>
          <div className={styles.deliveryGuaranteeContainer}>
            <span className={styles.deliveryGuarantee}>
              {deliveryGuarantee ? "سفارش اکسپرس:" : "پیک فروشنده:"}
            </span>
            <span>{deliveryFee} تومان</span>
          </div>
        </div>
      </div>
      {!isOpen && <div className={styles.closedTag}>پیش سفارش</div>}
    </div>
  );
};

export default VendorCard;
