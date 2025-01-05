import { createFeatureSelector } from "@ngrx/store";
import { Bucket } from "../../models/bucket.model";

export const selectBuckets = createFeatureSelector<Bucket[]>('buckets');