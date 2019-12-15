import React from 'react'
import { FaMars, FaVenus, FaPaperclip } from 'react-icons/fa';
import classNames from 'classnames';
import moment from 'moment';
import 'moment/locale/pl';

import Modal from './Modal.js';
import Lightbox from './Lightbox.js';

import defaultDog from '../img/default_dog.png'

const DogInfo = props => (
  <div className="is-parent" key={props.id}>
    <div className="is-full">
      <div className="columns is-12">
        <div className="column is-6" >
            <div className="dog-info" style={{
              backgroundImage: `url(${
                !!(props.image && props.image.childImageSharp)
                  ? props.image.childImageSharp.fluid.src
                  : defaultDog
              })`
            }}></div>
          <div style={{padding: '0px 10px'}}>
            {
              props.homeName ?
                <div>
                  <p className="is-size-5 dog-info-subheader">IMIĘ DOMOWE:</p>
                  <p className="is-size-5 dog-info-text">{ props.homeName }</p>
                </div>
                :
                props.parents ?
                  <div>
                    <p className="is-size-5 dog-info-subheader">RODZICE:</p>
                    <div>
                      <div className="is-size-5 dog-info-text"><FaMars style={{color: '#19A1FF'}} />{ props.parents.father }</div>
                      <div className="is-size-5 dog-info-text"><FaVenus style={{color: '#FF0075'}} />{ props.parents.mother }</div>
                    </div>
                  </div>
                  :
                  props.dogs &&
                    <div style={{marginTop: 10}}>
                      <p className="is-size-5 dog-info-subheader">WYSTAWIANE PSY:</p>
                      <ul className="puppies-list">
                        {
                          props.dogs &&
                          props.dogs.map((dog, idx) => {
                            return (
                              <li key={idx} className="is-size-5">
                                { dog.dog }
                                {
                                  dog.achievements && dog.achievements[0] !== '' &&
                                  <div style={{paddingLeft: 10}}>
                                    <span className="is-size-5 dog-info-subheader">OSIĄGNIĘCIA: </span>
                                    <ul style={{paddingLeft: 10}}>
                                    {
                                      dog.achievements.map(achievement => <li>{achievement}</li>)
                                    }
                                    </ul>
                                  </div>
                                }
                              </li>
                            )}
                          )
                        }
                      </ul>
                    </div>
            }
            {
              props.exhibitionDate &&
                <p className="is-size-5 dog-info-subheader">DATA WYSTAWY:</p>
            }
            {
                props.birthDate &&
                  <p className="is-size-5 dog-info-subheader">DATA URODZENIA:</p>
            }
            <p className="is-size-5 dog-info-text">
            {
              props.birthDate ?
                moment(props.birthDate).local().format("D MMMM YYYY")
                :
                props.exhibitionDate ?
                  moment(props.exhibitionDate).local().format("D MMMM YYYY")
                  :
                  ' - '
            }
           </p>
            {
              props.lineage &&
                <div>
                  <p className="is-size-5 dog-info-subheader" style={{marginBottom: 5}}>RODOWÓD:</p>
                  <a target="_blank" rel="noopener noreferrer" href={props.lineage}>
                    <FaPaperclip size="2em" />
                  </a>
                </div>
            }
            {
              props.achievements && props.achievements.length > 0 &&
              <div>
                <p className="is-size-5 dog-info-subheader">OSIĄGNIĘCIA:</p>
                <ul>
                  {
                    props.achievements.map((achievement, idx) => <li className="is-size-5 dog-info-text" key={idx}>{achievement}</li>)
                  }
                </ul>
              </div>
            }
            {
              props.puppies &&
              <div>
                <p className="is-size-5 dog-info-subheader" style={{marginBottom: 0}}>SZCZENIĘTA:</p>
                <ul className={'puppies-list'}>
                  <strong>
                    {
                      props.puppies && props.puppies.length > 0 && props.puppies[0] !== '' ?
                        props.puppies.map((puppie, idx) =>
                          (
                            <li className={classNames('is-size-5', {'puppie-available': puppie.available})} key={idx}>
                              <div className="puppie dog-info-text" key={'puppie-'+idx}>
                              { puppie.name }
                              {
                                puppie.gender === 'male' ?
                                  <span className="gender-symbols"><FaMars size="1.5em" style={{color: '#19A1FF'}} /></span>
                                  :
                                  puppie.gender === 'female' ?
                                    <span className="gender-symbols"><FaVenus size="1.5em" style={{color: '#FF0075'}} /></span>
                                    :
                                    <span className="gender-symbols"></span>
                              }
                              </div>
                            </li>
                          ))
                          :
                          <li> - </li>
                    }
                  </strong>
                </ul>
              </div>
            }
          </div>
        </div>
        <div className="column is-6">
          <div style={{position: 'relative', top: '-4px'}}>
            <ul className="gallery">
              {
                props.galleryImages && props.galleryImages.map(({image}, idx) => {
                  return (
                    <li key={idx} className="gallery-image">
                      <div key={'dog-' + idx} className="dog" style={{
                        backgroundImage: `url(${
                          !!(image && image.childImageSharp)
                            ? image.childImageSharp.fluid.src
                            : image
                        })`
                      }} onClick={e => props.openLightbox(idx, e)}>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
            {
              props.description &&
              <p style={{margin: '20px 0px'}}>
                {
                  props.description
                }
              </p>
            }
          </div>
          {
            props.lightbox &&
            <Modal>
              <Lightbox
                backdropClosesModal
                images={props.photos}
                currentImage={props.currentImage}
                onClose={() => props.onClose()}
                />
            </Modal>
          }
        </div>
      </div>
    </div>
  </div>
)

export default DogInfo
