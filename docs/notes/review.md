The authors have introduced an interesting end-to-end system that estimates
sensor pose while refining depth from sparse depth measurements and RGB images.

In the introduction, the authors have mentioned that Lidars are heavy, bulky
and expensive. Low cost ToF cameras are an alternative to Lidars but depth
measurements are noisy, limited by field of view and resolution. At first the
introduction places a heavy impression the need for low cost ToF cameras for
MAV applications, but actually both ToF and sparse depth from Lidars are
used for the proposed method which confuses the reader.

Additionally, from personal experience low cost RGBD sensors such as the Intel
RealSense depth measurements are not as sparse nor as noisy as Fig.1 portrays.
It would be beneficial to point out in what low cost RGBD sensors was used to
yield such noisy sparse depth data, and highlight what scenarios causes such
noisy data.

The paper argues state of the art monocular algorithms such as DSO do not
provide an easy method to incorporate depth. This argument is a bit lazy, the
original algorithm did not require depth measurements, more elaboration is
required as to why depth measurements are required in the first place.
Considering the depth of the features will eventually be estimated over time in
any case. Perhaps the goal is claim that for best accuracy in depth,
measurements in depth are required? Which in turn improves pose estimation?


Problems in results section:

- In the results section, Fig. 4. in regards to the input depth from the TUM
  dataset it doesn't look the same as the input depth from the actual dataset.
  Has the input depth been tampered with additional noise? *Edit*: The depth
  values were tampered with as discussed in Section VI.C. but no explanation was
  provided as to why this is required? Feels a bit artifical, more explanation
  towards the noise added is vital. e.g. Does the noise added make sense?

- Table I. lacks bold highlighting to hightlight the best in each error metric.

- Section VI.B "Our prediction RMSE* error, 0.943 ..." what is the unit? (I know
  its in meters but it differs from Table I., would suggest sticking to meters
  or mm). "is far superior to that of Sfmlearner, 6.565", where is this in
  Table I.?

- Stereo DSO has been demonstrated to run on the KITTI odometry dataset why not
  compare your method using that?

- Have you tried ORB SLAM on the TUM dataset? For the odometry benchmark?


Overall, there are several issues with the paper.

1. Story isn't very clear, is the paper trying to create a depth sensor for MAV
   applications and improve low cost RGBD sensors? Why both RGBD + Lidar? ("We
   propose a method where we use noisy depth measurements from popular low-cost
   stereo cameras, RGBD sensors, and sparse depth from LiDAR")

2. Paper does not elaborate why depth measurments are needed in state of the art
   monocular algorithms such as DSO. It has already achieved good results without
   depth measurements.

3. The sparse, noisy depth input featured in Fig.1 and Fig.2. has an arbitrary
   gaussian noise added to each depth value. An explanation is required to
   justify the choice. Or more importantly answer "does the noise added make
   sense?"

4. Presentation of results could be improved, e.g. units, bold highlighting,
   comparison between proposed method vs DSO or ORB SLAM for the pose
   benchmark. Find datasets that proves your state-estimation is competitive
   against traditional SLAM algorithms. There is no trajectory plots to compare
   proposed method against next best method.

5. If the depth, pose estimation is competitive compared to traditional SLAM /
   VO / VIO, and can execute in real time this would make this system very
   attractive. Metrics such as timings, CPU and memory usage required to obtain
   pose + depth estimation from proposed algorithm would be a very nice
   addition to the results section.
