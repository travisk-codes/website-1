import React, { FC } from "react"

import { IExternalResource, ITocItem } from "../../types"
import { Container } from "../Container"
import { PageSidebarLink } from "../PageSidebarLink"
import { Toc } from "../Toc"
import * as SC from "./styles"

interface IPageContentProps {
  content: JSX.Element
  toc?: ITocItem[]
  recommendedReading?: string[]
  externalResources?: IExternalResource[]
  footer?: JSX.Element
}

export const PageContent: FC<IPageContentProps> = ({
  content,
  toc = [],
  recommendedReading,
  externalResources,
  footer,
}) => {
  return (
    <>
      <SC.ContentHeader>
        {toc.length > 0 && (
          <Toc
            header={<SC.SidebarHeader>Table of Contents</SC.SidebarHeader>}
            items={toc}
          />
        )}
      </SC.ContentHeader>

      <SC.Content>
        <Container>{content}</Container>
      </SC.Content>

      <SC.Sidebar>
        {recommendedReading && (
          <SC.RecommendedReading>
            <SC.SidebarHeader>Recommended reading</SC.SidebarHeader>
            {recommendedReading.map((item) => {
              return <PageSidebarLink key={item} href={item} type="internal" />
            })}
          </SC.RecommendedReading>
        )}

        {externalResources && (
          <SC.ExternalResources>
            <SC.SidebarHeader>External Resources</SC.SidebarHeader>
            {externalResources.map((item) => {
              return (
                <PageSidebarLink
                  key={item.href}
                  href={item.href}
                  text={item.text}
                  type="external"
                />
              )
            })}
          </SC.ExternalResources>
        )}
        {footer}
      </SC.Sidebar>
    </>
  )
}
