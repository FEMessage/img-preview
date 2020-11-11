import Vue, {VueConstructor} from 'vue'

declare module '@femessage/img-preview' {
  class FemessageComponent extends Vue {
    static install(vue: typeof Vue): void
  }

  type CombinedVueInstance<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = Data & Methods & Computed & Props & Instance

  type ExtendedVue<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = VueConstructor<
    CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue
  >

  type Combined<Data, Methods, Computed, Props> = Data &
    Methods &
    Computed &
    Props

  type ImgPreviewData = {}

  type ImgPreviewMethods = {}

  type ImgPreviewComputed = {}

  type ImgPreviewProps = {
    url: string
  }

  type ImgPreview = Combined<
    ImgPreviewData,
    ImgPreviewMethods,
    ImgPreviewComputed,
    ImgPreviewProps
  >

  export interface ImgPreviewType extends FemessageComponent, ImgPreview {}

  const ImgPreviewConstruction: ExtendedVue<
    Vue,
    ImgPreviewData,
    ImgPreviewMethods,
    ImgPreviewComputed,
    ImgPreviewProps
  >

  export default ImgPreviewConstruction
}
