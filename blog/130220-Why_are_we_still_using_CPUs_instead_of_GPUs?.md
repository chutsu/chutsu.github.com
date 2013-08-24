# Why are we still using CPUs instead of GPUs?
- tags: #computer-science #theory #cpu #gpu #performance

**Source**:
[Superuser.com](http://superuser.com/questions/308771/why-are-we-still-using-cpus-instead-of-gpus)

**TL;DR** answer: GPUs have far more processor cores than CPUs, but because
each GPU core runs significantly slower than a CPU core and do not have the
features needed for modern operating systems, they are not appropriate for
performing most of the processing in everyday computing. They are most suited
to compute-intensive operations such as video processing and physics
simulations.

GPGPU is still a relatively new concept. GPUs were initially used for rendering
graphics only; as technology advanced, the large number of cores in GPUs
relative to CPUs was exploited by developing computational capabilities for
GPUs so that they can process many parallel streams of data simultaneously, no
matter what that data may be. While GPUs can have hundreds or even thousands of
stream processors, they each run slower than a CPU core and have fewer features
(even if they are Turing complete and can be programmed to run any program a
CPU can run). Features missing from GPUs include interrupts and virtual memory,
which are required to implement a modern operating system.

In other words, CPUs and GPUs have significantly different architectures that
make them better suited to different tasks. A GPU can handle large amounts of
data in many streams, performing relatively simple operations on them, but is
ill-suited to heavy or complex processing on a single or few streams of data. A
CPU is much faster on a per-core basis (in terms of instructions per second)
and can perform complex operations on a single or few streams of data more
easily, but cannot efficiently handle many streams simultaneously.

As a result, GPUs are not suited to handle tasks that do not significantly
benefit from or cannot be parallelized, including many common consumer
applications such as word processors. Furthermore, GPUs use a fundamentally
different architecture; one would have to program an application specifically
for a GPU for it to work, and significantly different techniques are required
to program GPUs. These different techniques include new programming languages,
modifications to existing languages, and new programming paradigms that are
better suited to expressing a computation as a parallel operation to be
performed by many stream processors. For more information on the techniques
needed to program GPUs, see the Wikipedia articles on stream processing and
parallel computing.

Modern GPUs are capable of performing vector operations and floating-point
arithmetic, with the latest cards capable of manipulating double-precision
floating-point numbers. Frameworks such as CUDA and OpenCL enable programs to
be written for GPUs, and the nature of GPUs make them most suited to highly
parallelizable operations, such as in scientific computing, where a series of
specialized GPU compute cards can be a viable replacement for a small compute
cluster as in NVIDIA Tesla Personal Supercomputers. Consumers with modern GPUs
who are experienced with Folding@home can use them to contribute with GPU
clients, which can perform protein folding simulations at very high speeds and
contribute more work to the project (be sure to read the FAQs first, especially
those related to GPUs). GPUs can also enable better physics simulation in video
games using PhysX, accelerate video encoding and decoding, and perform other
compute-intensive tasks. It is these types of tasks that GPUs are most suited
to performing.

AMD is pioneering a processor design called the Accelerated Processing Unit
(APU) which combines conventional x86 CPU cores with GPUs. This approach
enables graphical performance vastly superior to motherboard-integrated
graphics solutions (though no match for more expensive discrete GPUs), and
allows for a compact, low-cost system with good multimedia performance without
the need for a separate GPU. Intel's latest processors also offer onboard
graphics, but while they may have superior compute performance, their onboard
graphics cannot compete with AMD APUs. As technology continues to advance, we
will see an increasing degree of convergence of these once-separate parts.

Nonetheless, many tasks performed by PC operating systems and applications are
still better suited to CPUs, and much work is needed to accelerate a program
using a GPU. Since so much existing software use the x86 architecture, and
because GPUs require different programming techniques and are missing several
important features needed for operating systems, a general transition from CPU
to GPU for everyday computing is extremely difficult.
