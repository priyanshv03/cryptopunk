import React from 'react'
import { Link } from 'react-router-dom'

const NftCard = (props) => {
    const {title, id, currentBid, creatorImg, imgUrl, creator} = props.item
  return <div className="single__nft__card">
            <div className="nft__img">
              <img src={imgUrl} alt="" className="w-100" />
            </div>
            <div className="nft__content">
              <h5 className="nft__title"><Link to={`/market/${id}`}>{title}</Link></h5>
              <div className="creater__info-wrapper d-flex gap-3">
                <div className="creator__img">
                  <img src={creatorImg} alt="" className="w-100" />
                </div>
                <div className="creator__info d-flex align-items-center justify-content-between w-100">
                  <div>
                    <h6>Created by</h6>
                    <p>{creator}</p>
                  </div>
                  <div >
                    <h6>Current bid</h6>
                    <p>{currentBid} ETH</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 d-flex align-items-center justify-content-between">
                <button className="bid__btn d-flex align-items-center gap-1">
                  <i className="ri-shopping-bag-line"></i> Place Bid
                </button>

                <span className="history__link">
                  <Link to="#">View History</Link>
                </span>
              </div>
            </div>
          </div>
}

export default NftCard