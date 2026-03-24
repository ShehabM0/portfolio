import "./ProjectCard.css";

import ReactnativeIcon from "../assets/tech/reactnative.svg"
import TypescriptIcon from "../assets/tech/typescript.svg"
import JavascriptIcon from "../assets/tech/javascript.svg"
import PostgresqlIcon from "../assets/tech/postgresql.svg"
import WebsocketIcon from "../assets/tech/websocket.svg"
import FirebaseIcon from "../assets/tech/firebase.svg"
import LaravelIcon from "../assets/tech/laravel.svg"
import ExpressIcon from "../assets/tech/express.svg"
import GraphqlIcon from "../assets/tech/graphql.svg"
import AndroidIcon from "../assets/tech/android.svg"
import MongodbIcon from "../assets/tech/mongodb.svg"
import NodejsIcon from "../assets/tech/nodejs.svg"
import PythonIcon from "../assets/tech/python.svg"
import DjangoIcon from "../assets/tech/django.svg"
import DockerIcon from "../assets/tech/docker.svg"
import RenderIcon from "../assets/tech/render.svg"
import OpenglIcon from "../assets/tech/opengl.svg"
import ArrowLogo from "../assets/icons/arrow.svg"
import AntlrIcon from "../assets/tech/antlr.svg"
import MysqlIcon from "../assets/tech/mysql.svg"
import RedisIcon from "../assets/tech/redis.svg"
import FlyioIcon from "../assets/tech/flyio.svg"
import ExpoIcon from "../assets/tech/expo.svg"
import JavaIcon from "../assets/tech/java.svg"
import HtmlIcon from "../assets/tech/html.svg"
import PhpIcon from "../assets/tech/php.svg"
import CssIcon from "../assets/tech/css.svg"

const icons = {
  reactnative: { title: "ReactNative", icon: ReactnativeIcon },
  typescript: { title: "TypeScript", icon: TypescriptIcon },
  javascript: { title: "JavaScript", icon: JavascriptIcon },
  postgresql: { title: "PostgreSQL", icon: PostgresqlIcon },
  websocket: { title: "Websocket", icon: WebsocketIcon },
  firebase: { title: "Firebase", icon: FirebaseIcon },
  laravel: { title: "Laravel", icon: LaravelIcon },
  express: { title: "Express", icon: ExpressIcon },
  graphql: { title: "GraphQL", icon: GraphqlIcon },
  android: { title: "Android", icon: AndroidIcon },
  mongodb: { title: "MongoDB", icon: MongodbIcon },
  nodejs: { title: "NodeJS", icon: NodejsIcon },
  python: { title: "Python", icon: PythonIcon },
  django: { title: "Django", icon: DjangoIcon },
  docker: { title: "Docker", icon: DockerIcon },
  render: { title: "Render", icon: RenderIcon },
  opengl: { title: "OpenGL", icon: OpenglIcon },
  flyio: { title: "Fly.io", icon: FlyioIcon },
  mysql: { title: "MySQL", icon: MysqlIcon },
  redis: { title: "Redis", icon: RedisIcon },
  antlr: { title: "Antlr", icon: AntlrIcon },
  java: { title: "Java", icon: JavaIcon },
  expo: { title: "Expo", icon: ExpoIcon },
  html: { title: "HTML", icon: HtmlIcon },
  css: { title: "CSS", icon: CssIcon },
  php: { title: "PHP", icon: PhpIcon },
};

export default function ProjectCard({ item, idx }) {
  return (
    <div className="proj-card" key={idx}>

      <div className="proj-top">
        <div className="proj-meta">
          <h3 className="proj-title">{item.title}</h3>
          <span className="proj-num">0{idx + 1}</span>
        </div>
        <p className="proj-desc">{item.description}</p>
      </div>

      <div className="proj-bottom">
        <div className="proj-icons">
          {item.stack.map((key) =>
            icons[key] ? (
              <img className="tech-icon" title={icons[key].title} src={icons[key].icon} />
            ) : null
          )}
        </div>

        <a
          className="proj-link"
          href={item.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${item.title} repository`}
        >
          View on GitHub
          <img src={ArrowLogo} />
        </a>
      </div>

    </div>
  );
}
