import styles from './BaseTemplate.module.css'

export type BaseTemplateProps = {
  sampleTextProp: string
}

function BaseTemplate({ sampleTextProp }: BaseTemplateProps) {
  return <div className={styles.container}>{sampleTextProp}</div>
}

export default BaseTemplate
