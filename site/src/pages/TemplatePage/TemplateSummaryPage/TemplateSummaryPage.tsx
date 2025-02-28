import { useTemplateLayoutContext } from "components/TemplateLayout/TemplateLayout"
import { FC } from "react"
import { Helmet } from "react-helmet-async"
import { pageTitle } from "util/page"
import { TemplateSummaryPageView } from "./TemplateSummaryPageView"
import { Loader } from "components/Loader/Loader"

export const TemplateSummaryPage: FC = () => {
  const { context } = useTemplateLayoutContext()
  const {
    template,
    activeTemplateVersion,
    templateResources,
    templateVersions,
    deleteTemplateError,
    templateDAUs,
  } = context

  if (!template || !activeTemplateVersion || !templateResources) {
    return <Loader />
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle(`${template.name} · Template`)}</title>
      </Helmet>
      <TemplateSummaryPageView
        template={template}
        activeTemplateVersion={activeTemplateVersion}
        templateResources={templateResources}
        templateVersions={templateVersions}
        templateDAUs={templateDAUs}
        deleteTemplateError={deleteTemplateError}
      />
    </>
  )
}

export default TemplateSummaryPage
