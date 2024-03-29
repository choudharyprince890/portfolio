import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import kafkaMl from "../images/kafkaml.png"
import scikitPipes from "../images/scikit_pipes.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-1",
        title: "Shopping Hub",
        links: [
            {
                name: "repo",
                url: "https://github.com/choudharyprince890/Shopping-Hub",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/choudharyprince890/Shopping-Hub/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://youtu.be/TcPWod_mKJY",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://github.com/choudharyprince890/Shopping-Hub#readme",
                icon: <ImBook/>,
            }
        ],
        // image: sklearnGenetic,
        image: "https://raw.githubusercontent.com/choudharyprince890/Shopping-Hub/main/shopping_hub/uploads/gif%20for%20git.gif",
        description: "Shopping Hub, an advanced and innovative ecommerce platform, With technologies like Machine learning, Deep learning, Generative AI and computer vision.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "AI-Powered Project Food Hub",
        links: [
            {
                name: "repo",
                /*url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt",*/
                url: "https://github.com/choudharyprince890/Food-Hub",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/choudharyprince890/Food-Hub/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://youtu.be/inn7iNcB7U4",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://github.com/choudharyprince890/Food-Hub#readme",
                icon: <ImBook/>,
            }
        ],
        // image: sklearnGenetic,
        image: "https://raw.githubusercontent.com/choudharyprince890/Food-Hub/main/uploads/ezgif.com-crop.gif",
        description: "Food Hub is an innovative project that leverages cutting-edge machine learning, deep learning and transformer techniques to provide a comprehensive food-related experience to users.",
        target: "_blank"
    },
    
    {
        id: "project-3",
        title: "T-20 Cricket Score Prediction",
        links: [
            {
                name: "repo",
                /*url: "https://github.com/rodrigo-arenas/Sklearn-genetic-opt",*/
                url: "https://github.com/choudharyprince890/T20-Cricket-Score-Prediction",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/choudharyprince890/T20-Cricket-Score-Prediction/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "docs",
                url: "https://github.com/choudharyprince890/T20-Cricket-Score-Prediction#readme",
                icon: <ImBook/>,
            }
        ],
        // image: sklearnGenetic,
        image: "https://sportsmintmedia.com/wp-content/uploads/2021/10/Tickets-to-go-on-sale-for-ICC-T20-World-Cup.jpg",
        description: "scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",
        target: "_blank"
    },
    
    {
        id: "project-4",
        title: "Whatsapp Chat and SentimentAnalysis",
        links: [
            {
                name: "repo",
                url: "https://github.com/choudharyprince890/Whatsapp-Chat-and-Sentiment-Analysis",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/choudharyprince890/Whatsapp-Chat-and-Sentiment-Analysis/forks",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://choudharyprince890-whatsapp-chat-and-sentiment-analy-app-wi00ls.streamlit.app",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://github.com/choudharyprince890/Whatsapp-Chat-and-Sentiment-Analysis/blob/main/README.md",
                icon: <ImBook/>,
            }
        ],
        // image: graphEmbeddings,
        image: "https://user-images.githubusercontent.com/84410675/229070644-da623b77-4cd4-43f4-82e7-aeca9be8c7cd.png",
        description: "The WhatsApp Chat and Sentiment Analysis allows users to perform sentiment analysis on their chat history.",
        target: "_blank"
    },
    {
        id: "project-5",
        title: "Stroke Predition with Machine Learning",
        links: [
            {
                name: "repo",
                url: "https://github.com/choudharyprince890/Stroke-Prediction-with-ML",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/choudharyprince890/Stroke-Prediction-with-ML/forks",
                icon: <BiGitRepoForked/>
            },
           /* {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",
                icon: <AiFillEye/>
            },*/
            {
                name: "docs",
                url: "https://github.com/choudharyprince890/Stroke-Prediction-with-ML#readme",
                icon: <ImBook/>,
            }
        ],
        // image: kafkaMl,
        image: "https://raw.githubusercontent.com/choudharyprince890/Stroke-Prediction-with-ML/main/screenshots/ss1.png",
        description: "This project is build with flask and bootstrap framework powered by machine learning model trained on Random Forrest Algoritham with the 95.6% accuracy.",
        target: "_blank"
    },
    {
        id: "project-6",
        title: "Thug Life Filter",
        links: [
            {
                name: "repo",
                url: "https://github.com/choudharyprince890/Thug-Life-Filter",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/choudharyprince890/Thug-Life-Filter/forks",
                icon: <BiGitRepoForked/>
            },
           {
                name: "subscription",
                url: "https://choudharyprince890.github.io/Thug-Life-Filter/",
                icon: <AiFillEye/>
            },
        ],
        // image: kafkaMl,
        image: "https://github.com/choudharyprince890/Thug-Life-Filter/blob/main/images/ezgif.com-crop.gif",
        description: "This project is build with flask and bootstrap framework powered by machine learning model trained on Random Forrest Algoritham with the 95.6% accuracy.",
        target: "_blank"
    },
    /*
    {
        id: "project-2",
        title: "Pyworkforce",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/pyworkforce",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/pyworkforce/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/pyworkforce/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "docs",
                url: "https://pyworkforce.readthedocs.io/en/stable/",
                icon: <ImBook/>,
            }
        ],
        image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
        description: "Standard tools for workforce management, queuing, scheduling, rostering and optimization problems.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Portfolio Web",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/portfolio",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/portfolio/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/portfolio/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: portfolio,
        description: "Source code of my current portfolio web page as data scientist.",
        target: "_blank"
    },
    {
        id: "project-0",
        title: "Scikit-Pipes",
        links: [
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/scikit-pipes",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/rodrigo-arenas/scikit-pipes/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/rodrigo-arenas/scikit-pipes/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: scikitPipes,
        description: "Scikit-Learn practical pre-defined Pipelines Hub.",
        target: "_blank"
    }
    */
]

export default projectConfig