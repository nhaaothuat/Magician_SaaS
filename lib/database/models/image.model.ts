import {Document, Schema, model, models } from "mongoose";

// Đây là cách định nghĩa một interface trong TypeScript để mô tả cấu trúc của đối tượng  khi làm việc với mã TypeScript.
export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureURL: string; 
  width?: number;
  height?: number;
  config?: object; 
  transformationUrl?: string; 
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  }
  createdAt?: Date;
  updatedAt?: Date;
}

// Đây là cách định nghĩa một schema cho các tài liệu 
//  trong cơ sở dữ liệu MongoDB bằng cách sử dụng thư viện Mongoose trong môi trường Node.js.
const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  with: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
