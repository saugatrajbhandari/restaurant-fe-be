import { Media, MediaType } from "../../entities/media/media.entity";

class MediaService {
  async create({ type, fileName }: { type: string; fileName: string }) {
    const media = new Media();
    media.mediaType = type as MediaType;
    media.name = fileName;

    await media.save();
    return media;
  }
}

export default new MediaService();
